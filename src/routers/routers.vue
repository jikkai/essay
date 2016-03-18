<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './layout/home.vue';
import Posts from './layout/posts.vue';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/home/:page': {
        component: Home
    },
    '/posts/:id': {
        component: Posts
    }
});

router.redirect({
    '*': '/home/1'
});

export default router;
</script>

<style lang="sass">
@import "../../node_modules/typo.css/typo.css";
.typo {
    em {
        font-style: italic;
    }
    pre {
        overflow: auto;
    }
    a {
        border-bottom: 1px solid #3A434B;
    }
    blockquote {
        border-left: 2px solid #3A434B;
    }
    img {
        margin: auto;
        display: block;
    }
}
html, body {
    width: 100%;
    height: 100%;
    transition: all .4s;
    a {
        color: #5B5B61;
        &:hover {
            color: #5B5B61;
            text-decoration: none;
        }
    }
    ::selection {
        background:#5B5B61;
        color:#E8E8E8;
    }
}
</style>
