<template>
    <div class="container">
        <span>@Обратить внимание на крипто-консультант и контент. За что отвечает?:</span>
        <section class="inset">
            <article v-for="q in questions.hr" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@.</span>
    </div>
</template>

<script>
import questions from '@/assets/docs/questions.json'
export default {
    data() {
        return {
            questions: questions
        }
    }
}
</script>

<style lang="scss" scoped></style>
