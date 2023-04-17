<script>
import Footer from "./Footer.svelte"
import Header from "./Header.svelte"
</script>
<main>
<Header></Header>
<hr/>
<slot></slot>
<hr/>
<Footer></Footer>
</main>
<style>
    main{
        width: 100% !important;
        max-width: 100% !important;
    }
</style>