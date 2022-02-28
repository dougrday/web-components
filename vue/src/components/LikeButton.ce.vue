<template>
    <mwc-button id="myButton" :label="likedTextLabel" raised @click="toggleLike()"></mwc-button>
</template>

<script>
    import "@material/mwc-button";

    export default {
        props: {
            likedText: String,
        },
        data() {
            return {
                liked: true,
            }
        },
        computed: {
            likedTextLabel() {
                return this.liked ? this.likedText || "Like" : this.likedText ? `Un${this.likedText}` : "Unlike";
            },
        },
        methods: {
            toggleLike() {
                this.liked = !this.liked;
            }
        }
    };
</script>