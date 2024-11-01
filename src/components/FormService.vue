<template>
    <form @submit.prevent="handleSubmit" class="flex flex-wrap overflow-hidden">
        <div class="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-full lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <div class="name-input__box my-4">
                <input type="text" id="name" v-model="formData.name" class="w-full" placeholder="Digite seu nome"
                    required />
            </div>

            <div>
                <div class="flex items-center w-full gap-8">
                    <div class="ddd-input__box w-3/12 my-4">
                        <input type="text" v-model="formData.ddd" class="w-full" placeholder="DDD" maxlength="2"
                            required />
                    </div>
                    <div class="number-input__box w-3/4 my-4">
                        <input type="text" v-model="formData.phone" class="w-full"
                            placeholder="Digite número para contato" maxlength="9" required />
                    </div>
                </div>
            </div>

            <div class="flex items-center w-full gap-8">
                <div class="address-input__box w-3/4 my-4">
                    <input type="text" id="address" v-model="formData.address" class="w-full"
                        placeholder="Digite seu Endereço e nº" required />
                </div>

                <div class="cep-input__box w-3/12 my-4">
                    <input type="text" id="cep" v-model="formData.cep" class="w-full" placeholder="Digite seu CEP"
                        maxlength="8" required />
                </div>
            </div>

            <div class="email-input__box my-4">
                <input type="email" id="email" v-model="formData.email" class="w-full" placeholder="Digite seu E-mail"
                    required />
            </div>
        </div>

        <div class="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-full lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <div class="service-select__box select-style my-4">
                <select class="w-full" id="service" v-model="formData.service" required>
                    <option disabled value="">Selecione um serviço</option>
                    <option value="servico1">Serviço 1</option>
                    <option value="servico2">Serviço 2</option>
                </select>
            </div>

            <div class="select-style my-4">
                <select class="w-full" id="professional" v-model="formData.professional">
                    <option disabled value="">Selecione Profissional de sua preferencia</option>
                    <option value="profissional1">Profissional 1</option>
                    <option value="profissional2">Profissional 2</option>
                </select>
            </div>

            <div>
                <textarea class="w-full my-4" id="observation" v-model="formData.observation" placeholder="Escreva aqui"></textarea>
            </div>

            <button class="font-Hubballi uppercase my-4" type="submit">Enviar</button>
        </div>
    </form>
</template>

<script>
import { ref } from "vue";

export default {
    name: "FormService",
    setup() {
        const formData = ref({
            name: "",
            ddd: "",
            phone: "",
            address: "",
            cep: "",
            email: "",
            service: "",
            professional: "",
            observation: ""
        });

        const handleSubmit = () => {
            console.log("Dados do formulário:", formData.value);
            // Enviar os dados para o backend
        };

        return {
            formData,
            handleSubmit
        };
    }
};
</script>

<style scoped>

button {
    padding: 10px 50px;
    background-color: #000;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #303030;
}

input:focus {
    border-bottom: 2px solid black;
    margin-bottom: -1px;
    outline: none;
}

select:focus,
textarea:focus {
    outline: none;
}

.select-style {
    border: 1px solid black;
    padding: 10px 5px;
}

input,
textarea {
    border-bottom: 1px solid black;
    padding: 10px 0;
}

input::placeholder,
textarea::placeholder,
select {
    color: black;
    text-transform: uppercase;
    font-family: 'Hubballi';
}
</style>