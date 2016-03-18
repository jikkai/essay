<template>
    <hr>
    <footer>
        Copyright &copy;
        {{data.since === new Date().getFullYear() ? new Date().getFullYear() : data.since + ' - ' + new Date().getFullYear()}}
        <a v-link="{path: '/home/1'}">{{data.author}}</a>
        All Rights Reserved.
        <br>
        Powered by
        <a href="http://essay.asaki.me/" target="_blank">Essay</a>.
    </footer>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['data']
};
</script>

<style lang="sass" scoped>
    hr {
        height: 1px;
        margin: 2em 0;
        background-color: #5B5B61;
        background-image: -webkit-linear-gradient(left, #C1BFBE, #FFF);
        border: none;
    }
    footer {
        a {
            border-bottom: 1px solid #3A434B;
        }
    }
</style>
