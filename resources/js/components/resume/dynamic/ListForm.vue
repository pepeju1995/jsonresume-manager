<template>
    <div class="card my-2">
        <div class="card-header">
            <h3>{{ title }}</h3>
        </div>

        <div class="card-body">
            <div v-for="(form, i) in target[prop]" :key="i" class="d-flex mb-4 p-0">
                <div class="col-10 p-0">
                    <input
                        :placeholder="placeholder"
                        type="text"
                        class="form-control"
                        v-model="target[prop][i]"
                    >
                </div>
                <div class="col-2">
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-danger" @click="remove(i)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="btn btn-primary" @click="add()">
                Add
            </div>
        </div>
    </div>
</template>

<script>
import mixin from './mixin';

export default {
    name: 'ListForm',
    
    mixins: [mixin],

    props: {
        placeholder: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            push: () => '',
        }
    }, 
}
</script>