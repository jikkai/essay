<template>
    <sidebar :data="data.sidebar"></sidebar>
    <archives :data="data.archives"></archives>
</template>

<script>
import $ from 'jquery';
import yaml from 'js-yaml';
import Sidebar from '../../components/sidebar.vue';
import Archives from '../../components/archives.vue';

export default {
    data () {
        return {
            data: {}
        };
    },
    route: {
        waitForData: true,
        data: function (transition) {
            let data = sessionStorage.getItem('archives');

            // 获取文章列表
            if (data === null) {
                data = $.ajax({
                    type: 'GET',
                    url: '/_config.yml',
                    async: false
                }).responseText;
                sessionStorage.setItem('archives', data);
            }

            let object = typeof data === 'string' ? yaml.load(data) : {
                site: {},
                posts: [],
                per_page: 10
            };
            let posts = object.posts;

            // 获取总页数
            let per = object.per_page;
            let total = Math.ceil(posts.length / per);

            let hash = location.hash;
            let now = hash.substring(hash.lastIndexOf('/') + 1);

            // 获取当前页文章列表
            now = now.length === 0 ? 1 : Number(now);
            posts = posts.slice((now - 1) * per, now * per);

            return {
                data: {
                    sidebar: object.site,
                    archives: {
                        posts: posts,
                        pagination: {
                            total: total,
                            now: now
                        },
                        footer: object.site
                    }
                }
            };
        }
    },
    components: {
        Sidebar,
        Archives
    }
};
</script>
