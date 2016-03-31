<template>
    <ul v-if="data.total > 1">
        <li class="prev">
            <a v-if="data.now !== 1" v-link="{path: '/home/' + (data.now - 1)}">上一页</a>
            <a v-else class="disabled">上一页</a>
        </li>
        <li class="next">
            <a v-if="data.now !== data.total" v-link="{path: '/home/' + (data.now + 1)}">下一页</a>
            <a v-else class="disabled">下一页</a>
        </li>
    </ul>
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
    ul {
        width: 100%;
        text-align: center;
        display: block;
        >li {
            margin: 0 1em;
            display: inline-block;
            >a {
                padding: .2em 1em;
                color: #3A434B;
                border: 2px solid #3A434B;
                display: block;
                transition: all .3s;
                &:hover {
                    color: #E8E8E8;
                    background: #3A434B;
                }
                &.disabled {
                    color: #C1BFBE;
                    border: 2px solid #C1BFBE;
                    cursor: not-allowed;
                    &:hover {
                        color: #C1BFBE;
                        background: none;
                    }
                }
            }
        }
    }
</style>
