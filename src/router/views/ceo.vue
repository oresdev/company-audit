<template>
    <div class="container">
        <span>@Компетенции CEO — управление всеми сферами деятельности, поэтому он несёт полную законодательную ответственность за работу компании и её последствия.:</span>
        <section class="inset">
            <article v-for="q in questions.ceo" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@В данном случае нам необходимо убрать бейдж до "Менеджер по развитию"</span>
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
