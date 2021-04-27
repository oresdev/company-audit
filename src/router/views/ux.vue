<template>
    <div class="container">
        <span>@После прохождения вопросов, возвращаемся к базовым вопросам:</span>
        <section class="inset">
            <article v-for="q in questions.ux" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@Необходимо продемонстрировать последнюю свою работу и обсудить ее детально. Так же необходимо продемонстрировать лучшую свою работу.</span>
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
