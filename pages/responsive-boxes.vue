<!-- pages/responsive-boxes.vue -->
<template>

    <div class="flex flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-1/2 p-4 border border-gray-300">
            Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute
            JavaScript code outside of a web browser
            1
            2
            . It is built on the Google Chrome V8 JavaScript engine, which makes it highly performant
            3
            . Node.js is widely used for building scalable network applications and is popular among companies like
            Netflix and Uber

        </div>
        <div class="w-full lg:w-1/2 p-4 border border-gray-300">
            Node.js uses an asynchronous, non-blocking I/O model, which makes it efficient and suitable for
            data-intensive applications
            1
            . This means that Node.js can handle multiple requests simultaneously without waiting for any single
            operation to complete. For example, when a file is being read, Node.js can continue processing other
            requests and return the file content once it is ready
            1
            .
        </div>
    </div>

    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute
            JavaScript code outside of a web browser
            1
            2
            . It is built on the Google Chrome V8 JavaScript engine, which makes it highly performant
            3
            . Node.js is widely used for building scalable network applications and is popular among companies like
            Netflix and Uber
        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            Node.js uses an asynchronous, non-blocking I/O model, which makes it efficient and suitable for
            data-intensive applications
            1
            . This means that Node.js can handle multiple requests simultaneously without waiting for any single
            operation to complete. For example, when a file is being read, Node.js can continue processing other
            requests and return the file content once it is ready
            1
            .
        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            This means that Node.js can handle multiple requests simultaneously without waiting for any single
            operation to complete. For example, when a file is being read, Node.js can continue processing other
            requests and return the file content once it is ready
        </div>
    </div>

    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Dropdownlist</b></h2>
            <br />

            <div class="relative inline-block text-left">
                <label for="options" class="block text-sm font-medium text-gray-700">Select Action:</label>
                <select id="options" name="options"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-[#fffbeb] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Account settings</option>
                    <option>Support</option>
                    <option>License</option>
                    <option>Sign out</option>
                </select>
            </div>

        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Checkboxes</b></h2>
            <br />
            <div class="flex items-center mb-2">
                <input id="checkbox1" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <label for="checkbox1" class="ml-2 text-sm font-medium text-gray-900">Option 1</label>
            </div>

            <div class="flex items-center mb-2">
                <input id="checkbox2" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <label for="checkbox2" class="ml-2 text-sm font-medium text-gray-900">Option 2</label>
            </div>

            <div class="flex items-center mb-2">
                <input id="checkbox3" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <label for="checkbox3" class="ml-2 text-sm font-medium text-gray-900">Option 3</label>
            </div>

            <div class="flex space-x-4">
                <div class="flex items-center mb-2">
                    <input id="checkbox1" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="checkbox1" class="ml-2 text-sm font-medium text-gray-900">Option 11</label>
                </div>

                <div class="flex items-center mb-2">
                    <input id="checkbox2" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="checkbox2" class="ml-2 text-sm font-medium text-gray-900">Option 21</label>
                </div>

                <div class="flex items-center mb-2">
                    <input id="checkbox3" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="checkbox3" class="ml-2 text-sm font-medium text-gray-900">Option 31</label>
                </div>
            </div>

        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Radiobuttons</b></h2>
            <br />
            <div class="flex flex-col space-y-2">
                <div class="flex items-center">
                    <input id="radio1" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio1" class="ml-2 text-sm font-medium text-gray-900">Option 1</label>
                </div>
                <div class="flex items-center">
                    <input id="radio2" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio2" class="ml-2 text-sm font-medium text-gray-900">Option 2</label>
                </div>
                <div class="flex items-center">
                    <input id="radio3" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio3" class="ml-2 text-sm font-medium text-gray-900">Option 3</label>
                </div>
            </div>

            <div class="flex space-x-4">
                <div class="flex items-center">
                    <input id="radio1" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio1" class="ml-2 text-sm font-medium text-gray-900">Option 111</label>
                </div>
                <div class="flex items-center">
                    <input id="radio2" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio2" class="ml-2 text-sm font-medium text-gray-900">Option 211</label>
                </div>
                <div class="flex items-center">
                    <input id="radio3" name="options" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    <label for="radio3" class="ml-2 text-sm font-medium text-gray-900">Option 311</label>
                </div>
            </div>

        </div>
    </div>

    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Box 1</b></h2>
            <br />
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
                <div class="shrink-0">

                </div>
                <div>
                    <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-slate-500">You have a new message!</p>
                </div>
            </div>
            <a href="#"
                class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div class="flex items-center space-x-3">
                    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none"
                        viewBox="0 0 24 24"><!-- ... --></svg>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                </div>
                <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting
                    templates.</p>
            </a>
        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Fieldset</b></h2>
            <br />

            <fieldset>
                <legend>Published status</legend>

                <input id="draft" class="peer/draft" type="radio" name="status" checked />
                <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

                <input id="published" class="peer/published" type="radio" name="status" />
                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
            </fieldset>

        </div>
        <div class="w-full md:w-1/3 p-4 border border-gray-300">
            <h2><b>Table</b></h2>
            <br />
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 w-full border-collapse">
                    <thead class="bg-gray-200">
                        <tr>
                            <th scope="col"
                                class="px-2 py-2 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border border-gray-300">
                                Column 1
                            </th>
                            <th scope="col"
                                class="px-2 py-2 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border border-gray-300">
                                Column 2
                            </th>
                            <th scope="col"
                                class="px-2 py-2 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border border-gray-300">
                                Column 3
                            </th>
                            <th scope="col"
                                class="px-2 py-2 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border border-gray-300">
                                Column 4
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="bg-gray-50">
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 1
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 2
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 3
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 4
                            </td>
                        </tr>
                        <tr>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 5
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 6
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 7
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 8
                            </td>
                        </tr>
                        <tr class="bg-gray-50">
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 9
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 10
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 11
                            </td>
                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                                Data 12
                            </td>
                        </tr>
                        <!-- Add more rows as needed -->
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResponsiveBoxes'
    }
</script>

<script setup>
    import { inject } from 'vue';
    const subtitle = inject('subtitle'); // Inject the provided subtitle

    onMounted(() => {
        subtitle.value = 'Responsive Boxes'; // Set the subtitle value when the component is mounted
    });
</script>

<style scoped>
    /* Your styles go here */
</style>
