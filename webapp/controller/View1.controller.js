sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ks.sz.project1.controller.View1", {
			onInit: function () {

			},
      onNext: function(){
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter.navTo("View2");
    },
	onNext0:function(){
		this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter.navTo("View3");
	}
		});
	});
