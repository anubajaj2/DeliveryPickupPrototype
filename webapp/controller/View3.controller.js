sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ks.sz.project1.controller.View3", {
			onInit: function () {

			},

      onBack: function() {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter.navTo("View1");
      }
		});
	});
