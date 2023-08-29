import{a as b}from"../../../_chunks/chunk-5P4NUPQC.js";import{a as x}from"../../../_chunks/chunk-7J4OCYID.js";import{e as h,f as P,g as f,h as o,i as a}from"../../../_chunks/chunk-BGX5KIY6.js";import{a as s,b as n,c as p,e as g,f as R}from"../../../_chunks/chunk-ZR7A2VZA.js";var S=n(R(),1);var w=n(g(),1),e=n(R(),1);var l=class extends w.TemplatedDialog{constructor(t){super(t);this.permissions=new b(this.byId("Permissions"),{showRevoke:!1}),f.List({RoleID:this.options.roleID,Module:null,Submodule:null},y=>{this.permissions.value=y.Entities.map(m=>({PermissionKey:m}))}),this.permissions.implicitPermissions=(0,e.getRemoteData)("Administration.ImplicitPermissions")}getDialogOptions(){let t=super.getDialogOptions();return t.buttons=[{text:(0,e.localText)("Dialogs.OkButton"),click:y=>{f.Update({RoleID:this.options.roleID,Permissions:this.permissions.value.map(m=>m.PermissionKey),Module:null,Submodule:null},m=>{this.dialogClose(),window.setTimeout(()=>(0,e.notifySuccess)((0,e.localText)("Site.RolePermissionDialog.SaveSuccess")),0)})}},{text:(0,e.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}],t.title=(0,e.format)((0,e.localText)("Site.RolePermissionDialog.DialogTitle"),this.options.title),t}getTemplate(){return'<div id="~_Permissions"></div>'}};s(l,"RolePermissionDialog");var c=n(g(),1);var I="edit-permissions",r=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new P(this.idPrefix)}getFormKey(){return P.formKey}getIdProperty(){return o.idProperty}getLocalTextPrefix(){return o.localTextPrefix}getNameProperty(){return o.nameProperty}getService(){return a.baseUrl}getToolbarButtons(){let t=super.getToolbarButtons();return t.push({title:x.Site.RolePermissionDialog.EditButton,cssClass:I,icon:"fa-lock text-green",onClick:()=>{new l({roleID:this.entity.RoleId,title:this.entity.RoleName}).dialogOpen()}}),t}updateInterface(){super.updateInterface(),this.toolbar.findButton(I).toggleClass("disabled",this.isNewOrDeleted())}};s(r,"RoleDialog"),r=p([c.Decorators.registerClass("KanbanProject.Administration.RoleDialog")],r);var u=n(g(),1);var i=class extends u.EntityGrid{getColumnsKey(){return h.columnsKey}getDialogType(){return r}getIdProperty(){return o.idProperty}getLocalTextPrefix(){return o.localTextPrefix}getService(){return a.baseUrl}constructor(d){super(d)}getDefaultSortBy(){return[o.Fields.RoleName]}};s(i,"RoleGrid"),i=p([u.Decorators.registerClass("KanbanProject.Administration.RoleGrid")],i);$(function(){(0,S.initFullHeightGridPage)(new i($("#GridDiv")).element)});
//# sourceMappingURL=RolePage.js.map
