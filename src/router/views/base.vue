<template>
    <div class="container">
        <span>@____, во время нашей беседы, я буду задавать тебе простые вопросы и тебе необходимо будет на них максимально подробно ответить:</span>
        <section class="inset">
            <article v-for="q in questions.base" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
        </section>

        <!-- <button>Button</button> -->
        <span>@____, благодарю тебя за уделенное время. У тебя остались ко мне какие-нибудь вопросы? Тогда, всего доброго.</span>
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
