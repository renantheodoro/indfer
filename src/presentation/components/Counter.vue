<template>
    <h3>
        +<span class="big">{{mainNumber}}</span>{{decimalNumber != null && decimalNumber != '' ? '.' + decimalNumber :
        ''}}
    </h3>
</template>
<script>
export default {
    name: "app-counter",

    props: {
        number: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            fullNumber: 0,
            counterSectionHeight: 0,
            ourProductSectionTop: 0
        }
    },

    computed: {
        mainNumber() {
            return this.splitNumber()[0];
        },
        decimalNumber() {
            return this.splitNumber()[1];
        },
    },

    methods: {
        startCounter() {
            let count = 0;
            let duration = 2000;

            let counterFunction = setInterval(() => {
                if (this.number > 999) {
                    count = count + 100;
                } else {
                    count++;
                }

                if (count == this.number) {
                    clearInterval(counterFunction);
                    this.fullNumber = count;
                } else {
                    this.fullNumber = count;
                }
            }, duration / this.number);
        },

        verifyScrollToStartCounter() {
            const currentTop = document.documentElement.scrollTop;

            if (currentTop >= this.ourProductSectionTop + this.counterSectionHeight) {
                this.startCounter();
                window.removeEventListener("scroll", this.verifyScrollToStartCounter);
            }
        },

        splitNumber() {
            let formattedNumber = new Intl.NumberFormat().format(this.fullNumber);
            formattedNumber = formattedNumber.toString();
            return formattedNumber.split('.');
        },
    },

    mounted() {
        const counterSection = document.getElementsByClassName('counter')[0];
        const ourProductSection = document.getElementsByClassName('our-products')[0];

        this.counterSectionHeight = counterSection.offsetHeight;
        this.ourProductSectionTop = ourProductSection.offsetTop;

        window.addEventListener("scroll", this.verifyScrollToStartCounter);
    },


}
</script>