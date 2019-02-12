import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
    name: { type: String, required: 'Enter a project name' },
    label: { type: String, required: 'Enter a project label' },
    description: { type: String },
    default_module_id: { type: String },
    default_module_label: { type: String },
    notes: { type: String },
    created_by: { type: String },
    created_date: { type: Date, default: Date.now },
    last_modified_by: { type: String },
    last_modified_date: { type: Date, default: Date.now },
    client_os_types: { type: [] },
    client_device_types: { type: [] },
    client_dev_languages: { type: String },
    client_dev_frameworks: { type: String },
    client_widget_frameworks: { type: String },
    mobile_css_framework: { type: String },
    desktop_css_framework: { type: String },
    app_ui_template: { type: String },
    client_code_pattern: { type: String },
    server_code_pattern: { type: String },
    server_dev_lang: { type: String },
    server_dev_framework: { type: String },
    server_run_time: { type: String },
    server_os: { type: String },
    server_dbms: { type: String },
    server_deployment_environment: { type: String },
    global_extensions: { type: String },
    ui_navigation_styles: { type: String },
    supported_browsers: { type: String },
    default_human_language: { type: String },
    other_human_languages: { type: String },
    entity: { type: String },
    enforce_documentation: { type: String },
    widget_count: { type: String },
    generation_type: { type: String },
    authorization_type: { type: String },
    authorizations: { type: String },
    communication_protocal: { type: String },
    stand_alone_app: { type: String },
    application_type: { type: String },
    lotus_notes_enabled: { type: String },
    extra_project_info: { type: String },
    lotus_notes_cred_enabled: { type: String },
    user_deployment_target: { type: String },
    server_deployment_target: { type: String }
});