sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ks.sz.project1.controller.View2", {
			onInit: function () {

			},
			onNext: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.navTo("View3");
			},

			onBack: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.navTo("View1");
			},
			onAcceptAss: function () {
				this.getView().getModel("local").setProperty("/link1", "0");
				this.getView().getModel("local").setProperty("/link2", "3");
				this.onBack();
			}
		});
	});
