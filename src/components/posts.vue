<template>
    <article class="typo">
        <header>
            <div class="meta">
                <h1>{{data.title}}</h1>
                <span class="author">Author: {{data.footer.author}}</span>
                <time>Date: {{data.date}}</time>
            </div>
            <div class="operate">
                <a v-on:click="back()">返回</a>
            </div>
        </header>
        <hr>
        {{{data.post}}}
        <copyright :data="data.footer"></copyright>
    </article>
</template>

<script>
import Copyright from '../components/copyright.vue';

export default {
    data () {
        return {
            back: () => {
                history.back();
            }
        };
    },
    props: ['data'],
    components: {
        Copyright
    }
};
</script>

<style lang="sass" scoped>
article {
    width: 70%;
    height: 100%;
    padding: 24px 36px;
    float: left;
    clear: right;
    box-sizing: border-box;
    overflow-y: auto;
    @media (max-width: 1170px) {
        width: 100%;
    }
    header {
        .meta {
            h1 {
                margin: 0 0 .2em 0;
                font-weight: normal;
            }
            span {
                margin-right: 1em;
            }
            time {
                font-weight: normal;
            }
        }
        .operate {
            float: right;
            a {
                width: 2em;
                padding: .2em 1em;
                color: #C1BFBE;
                border: 1px solid #C1BFBE;
                display: block;
                transition: all .3s;
                cursor: pointer;
                &:hover {
                    color: #FFF;
                    background: #C1BFBE;
                }
            }
        }
    }
    hr {
        height: 1px;
        margin: 1em 0 2em 0;
        background-color: #5B5B61;
        background-image: -webkit-linear-gradient(left, #C1BFBE, #FFF);
        border: none;
    }
}
</style>
