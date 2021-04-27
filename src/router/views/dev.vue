<template>
    <div class="container">
        <span>@Сейчас я задам несколько базовых вопросов, которые обычно задают <b>Junior</b>-разработчикам при приеме на работу:</span>
        <section class="inset">
            <article v-for="q in questions.dev" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@Необходимо определить профиль чтобы продолжить</span>
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
