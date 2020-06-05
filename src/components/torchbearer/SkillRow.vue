<template>
    <div>
        <td class="skill-name">{{ skillView.skill.name }}</td>
        <td>{{ skillView.suggestedHelpSkills }}</td>
    </div>
</template>

<script>
import { SkillData } from '../../models/skill-data';

export default {
    name: 'SkillRow',
    props: {
        skillView: SkillData
    }
}
</script>

<style scoped>
    .skill-name {
    font-weight: bold;
    }
</style>
