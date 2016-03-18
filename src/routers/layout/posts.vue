<template>
    <sidebar :data="data.sidebar"></sidebar>
    <posts :data="data.posts"></posts>
</template>

<script>
import $ from 'jquery';
import yaml from 'js-yaml';
import md from 'markdown';
import Sidebar from '../../components/sidebar.vue';
import Posts from '../../components/posts.vue';

export default {
    data () {
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
        let hash = location.hash;
        let postUrl = hash.substring(hash.lastIndexOf('/') + 1);
        let posts = object.posts;
        let source = '';
        let title = '';
        let date = '';
        for (let key in posts) {
            if (posts[key].url === postUrl) {
                source = posts[key].source;
                title = posts[key].title;
                date = posts[key].date;
                break;
            }
        }

        let content = $.ajax({
            type: 'GET',
            url: '/_posts/' + source + '.md',
            async: false
        }).responseText;

        let markdown = md.markdown;
        let post = typeof content === 'string' ? markdown.toHTML(content, 'Maruku') : '';

        return {
            data: {
                sidebar: object.site,
                posts: {
                    title: title,
                    date: date,
                    post: post,
                    footer: object.site
                }
            }
        };
    },
    components: {
        Sidebar,
        Posts
    }
};
</script>
