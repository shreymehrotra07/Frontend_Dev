class FormBuilder {
    constructor(fields, formId) {
        this.fields = fields;
        this.formId = formId;
    }

    generateForm() {
        const form = document.getElementById(this.formId);
        let html = "";

        this.fields.forEach(f => {
            html += `<label>${f.label}</label>`;
            html += `<input type="${f.type}" id="${f.label.toLowerCase()}" />`;
        });

        html += `<button id="submitBtn">Submit</button>`;
        form.innerHTML = html;

        document.getElementById("submitBtn").addEventListener("click", () => {
            console.log(this.getFormData());
        });
    }

    getFormData() {
        const data = {};
        this.fields.forEach(f => {
            const key = f.label.toLowerCase();
            data[key] = document.getElementById(key).value;
        });
        return data;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const formBuilder = new FormBuilder(fields, "dynamicForm");
formBuilder.generateForm();