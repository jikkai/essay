<template>
    <aside>
        <section>
            <header>
                <h1>
                    <a v-link="{path: '/home/1'}">{{data.title}}</a>
                </h1>
            </header>
            <h2>{{data.subtitle}}</h2>
        </section>
    </aside>
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
    aside {
        width: 30%;
        min-width: 340px;
        height: 100%;
        background: url('/images/bg.jpg') center center no-repeat;
        background-size: cover;
        float: left;
        overflow: hidden;
        @media (max-width: 1170px) {
            min-width: 100%;
            display: table;
        }
        section {
            width: 100%;
            height: 100%;
            padding: 2em 1em;
            color: #E8E8E8;
            background: rgba(255,255,255,.2);
            box-sizing: border-box;
            @media (max-width: 1170px) {
                vertical-align: middle;
                display: table-cell;
            }
            header {
                width: 300px;
                height: 300px;
                margin: auto;
                background: url('/images/deco.svg') no-repeat;
                background-size: cover;
                display: table;
                h1 {
                    width: 300px;
                    height: 300px;
                    text-align: center;
                    vertical-align: middle;
                    display: table-cell;
                    a {
                        color: rgba(255,255,255,.9);
                        font-family: 'Calligraffitti', cursive;
                        font-size: 3em;
                        font-weight: bold;
                        text-shadow: 1px 2px 4px rgba(0,0,0,.4);
                    }
                }
            }
            h2 {
                margin: 1em 0;
                color: rgba(255,255,255,.8);
                font-family: 'Calligraffitti', cursive;
                text-align: center;
                text-shadow: 1px 1px 4px rgba(0,0,0,.4);
            }
        }
    }
</style>
