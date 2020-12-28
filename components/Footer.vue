<template>
    <footer id="footer" class="blue-bg py-5 text-white">
        <b-container>
            <b-row class="pt-5">
                <b-col cols="12" class="text-center">
                    <p>&copy; Stick em Up! {{ new Date().getFullYear() }} All rights reserved. Developed by <a href="https://www.danidean.co.uk" target="_blank" rel="noopener noreferrer">Dani Dean</a></p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>