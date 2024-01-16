<template>
    <div class="box">
        <header>
            <slot name="title"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>
<script>
    const box = {
        name: 'box'
    };
    export default box;
</script>
<style scoped>
    .box {
        width: 400px;
        height: 300px;
        border-radius: 14px;
        padding: 14px;
        color: black;
        background: floralwhite;
    }
</style>

