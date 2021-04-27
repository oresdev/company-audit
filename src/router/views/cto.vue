<template>
    <div class="container">
        <span>@CTO — это обязательно технический специалист с опытом самостоятельного решения инженерных задач.:</span>
        <section class="inset">
            <article v-for="q in questions.cto" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@Дальше должны идти вопросы для Project менеджера.</span>
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
