<template>
    <div class="torchbearer">
        <h1>Torchbearer</h1>
        <p>Torchbearer skills</p>

        <div class="new-skill">
            <h2>Add new skill</h2>
            <br />
            <div class="form-group row">
                <label for="name" class="col-sm-1 col-form-label">Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" for="name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Torchbearer',
        data() {
            return {
                name: ''
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .new-skill{
        border-width: 1px;
        border-style: solid;
        padding: 20px;
    }
</style>
