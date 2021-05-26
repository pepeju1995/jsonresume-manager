<template>
    <div>
        <Alert 
            v-if="alert.messages.length !== 0"
            :messages="alert.messages"
            :type="alert.type"
            @close="alert.messages = []"
        />

        <div class="row mb-3">
            <div class="col-sm-8">
                <div class="form-group">
                    <input 
                        v-model="resume.title"
                        placeholder="Resume Title"
                        required
                        autofocus
                        class="form-control w-100"
                    />
                </div>
            </div>
            <div class="col-sm-4">
                <button class="btn btn-success btn-block" @click="submit()">
                    Submit <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <Tabs>
            <Tab title="Basics" icon="fas fa-user">
                <VueFormGenerator 
                    :schema="schemas.basics"
                    :model="resume.content.basics"
                    :options="options"
                />

                <VueFormGenerator 
                    :schema="schemas.location"
                    :model="resume.content.basics.location"
                    :options="options"
                />
            </Tab>

            <Tab title="Profiles" icon="fa fa-users">
                <DynamicForm 
                    title="Profile"
                    self="profiles"
                    :model="resume.content.basics"
                    :schema="schemas.profiles"
                />
            </Tab>

            <Tab title="Work" icon="fa fa-briefcase">
                <DynamicForm 
                    title="Work"
                    self="work"
                    :model="resume.content"
                    :schema="schemas.work"
                    :subforms="subforms.work"
                />
            </Tab>

            <Tab title="Education" icon="fa fa-graduation-cap">
                <DynamicForm 
                    title="Education"
                    self="education"
                    :model="resume.content"
                    :schema="schemas.education"
                    :subforms="subforms.education"
                />
            </Tab>

            <Tab title="Awards" icon="fa fa-trophy">
                <DynamicForm 
                    title="Awards"
                    self="awards"
                    :model="resume.content"
                    :schema="schemas.awards"
                    :subforms="subforms.awards"
                />
            </Tab>

            <Tab title="Skills" icon="fa fa-lightbulb">
                <DynamicForm 
                    title="Skills"
                    self="skills"
                    :model="resume.content"
                    :schema="schemas.skills"
                    :subforms="subforms.skills"
                />
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import jsonresume from './jsonresume';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import profiles from './schema/basics/profiles';
import work from './schema/work';
import education from './schema/education';
import awards from './schema/awards';
import skills from './schema/skills';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import DynamicForm from './dynamic/DynamicForm';
import ListForm from './dynamic/ListForm';
import Alert from '../reusable/alert.vue';

export default {
    name: 'ResumeForm',

    components: {
        Tabs,
        Tab,
        VueFormGenerator,
        DynamicForm,
        Alert,
    },

    props: {
        update: false,
        resume: {
            type: Object,
            default: () => ({
                id: null,
                title: 'Resume Title',
                content: jsonresume,
            })
        }
    },

    data() {
        return {
            alert: {
                type: 'warning',
                messages: [],
            },

            schemas: {
                basics,
                location,
                profiles,
                work,
                education,
                awards,
                skills,
            },

            subforms: {
                work: [
                    {
                        component: ListForm,
                        props: {
                            title: 'Highlights',
                            self: 'highlights',
                            placeholder: 'Started the company',
                        }
                    }
                ],
                education: [
                    {
                        component: ListForm,
                        props: {
                            title: 'Courses',
                            self: 'courses',
                            placeholder: 'DB1101 - Basic SQL',
                        }
                    }
                ],
                skills: [
                    {
                        component: ListForm,
                        props: {
                            title: 'Keywords',
                            self: 'keywords',
                            placeholder: 'JavaScript',
                        }
                    }
                ],
            },

            options: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true,
            },
        };
    },

    methods: {
        async submit() {
            try {
                const res = this.update
                    ? await axios.put(route('resumes.update', this.resume.id), this.resume)
                    : await axios.post(route('resumes.store'), this.resume);
                console.log(res);
            } catch (e) {
                console.log(e.response.data);
            }
        }
    }
};
</script>
