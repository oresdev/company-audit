<template>
    <div class="container">
        <button @click="key = 'project'" :class="{ active: key == 'project' }">Project manager</button>
        <button @click="key = 'product'" :class="{ active: key == 'product' }">Product manager</button>
        <span>@Менеджер проекта — руководитель: он распределяет задачи и нагрузку, проверяет и снова руководит процессом.</span>
        <section class="inset">
            <article v-for="q in questions[key]" :key="q.index">
                ~ {{ q[0] }}
                <blockquote v-html="q[1]"></blockquote>
            </article>
            <article v-for="q in questions.group" :key="q.index">
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
            active: '',
            questions: questions,
            key: 'project',
            group: true
        }
    }
}
</script>

<style lang="scss" scoped></style>
