<template>
    <section>
        <ul>
            <li v-for="post in data.posts">
                <a v-link="{path: '/posts/' + post.url}">
                    {{post.title}}
                </a>
                <time>{{post.date}}</time>
            </li>
        </ul>
        <pagination :data="data.pagination"></pagination>
        <copyright :data="data.footer"></copyright>
    </section>
</template>

<script>
import Pagination from '../components/pagination.vue';
import Copyright from '../components/copyright.vue';

export default {
    data () {
        return {
        };
    },
    props: ['data'],
    components: {
        Pagination,
        Copyright
    }
};
</script>

<style lang="sass" scoped>
    section {
        width: 70%;
        height: 100%;
        padding: 24px 36px;
        float: left;
        clear: right;
        box-sizing: border-box;
        overflow-y: auto;
        @media (max-width: 1170px) {
            width: 100%;
            overflow-y: inherit;
        }
        >ul {
            >li {
                margin-bottom: .6em;
                font-size: 1.4em;
                >a {
                    max-width: 70%;
                    font-weight: normal;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: inline-block;
                    overflow: hidden;
                    transition: all .2s;
                    &:hover {
                        color: #C1BFBE;
                    }
                }
                >time {
                    position: relative;
                    top: .1em;
                    font-size: .8em;
                    color: #C1BFBE;
                    float: right;
                }
            }
        }
    }
</style>
