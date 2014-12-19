'use strict';

/**
 * @class
 * @type {{cssClass: string, daysTitleFormat: string, persianDigit: boolean, viewMode: string, position: string, autoClose: boolean, toolbox: boolean, format: boolean, observer: boolean, altField: boolean, altFormat: string, inputDelay: number, viewFormat: string, formatter: formatter, altFieldFormatter: altFieldFormatter, show: show, hide: hide, onShow: onShow, onHide: onHide, onSelect: onSelect, timePicker: {enabled: boolean}, dayPicker: {enabled: boolean}, monthPicker: {enabled: boolean}, yearPicker: {enabled: boolean}}}
 */
var ClassConfig = {
    /**
     * @property cssClass
     * @type {string}
     * @default datepicker-container
     */
    cssClass: 'datepicker-container',


    /**
     * @property daysTitleFormat
     * @type {string}
     * @default YYYY MMMM
     */
    daysTitleFormat: 'YYYY MMMM',

    /**
     * @property persianDigit
     * @type {boolean}
     * @default true
     */
    persianDigit: true,


    /**
     * @property viewMode
     * @type {string}
     * @default day
     */
    viewMode: 'day',


    /**
     * @property position
     * @type {string|Array}
     * @default auto
     */
    position: "auto",


    /**
     * @property autoClose
     * @type {boolean}
     * @default false
     */
    autoClose: false,


    /**
     * @property toolbox
     * @type {boolean}
     * @default true
     */
    toolbox: true,


    /**
     * @format format
     * @type {boolean}
     * @default false
     */
    format: false,


    /**
     * @format observer
     * @type {boolean}
     * @default false
     */
    observer: false,


    /**
     * @format altField
     * @type {boolean}
     * @default false
     */
    altField: false,


    /**
     * @format altField
     * @type {string}
     * @default unix
     */
    altFormat: 'unix',


    /**
     * @format inputDelay
     * @type {number}
     * @default 800
     */
    inputDelay: 800,


    /**
     * @format viewFormat
     * @type {string}
     * @default YYYY/MM/DD
     */
    viewFormat: "YYYY/MM/DD",


    /**
     * @method
     * @param unixDate
     * @returns {*}
     */
    formatter: function (unixDate) {
        var self = this;
        var pdate = new persianDate(unixDate);
        pdate.formatPersian = false;
        return pdate.format(self.viewFormat);
    },


    /**
     * @method
     * @param unixDate
     * @returns {*}
     */
    altFieldFormatter: function (unixDate) {
        var self = this;
        var thisAltFormat = self.altFormat.toLowerCase();
        if (thisAltFormat === "gregorian" | thisAltFormat === "g") {
            return new Date(self.state.unixDate);
        }
        if (thisAltFormat === "unix" | thisAltFormat === "u") {
            return self.state.unixDate;
        }
        else {
            return new persianDate(self.state.unixDate).format(self.altFormat);
        }

    },


    /**
     * @method
     * @returns {ClassConfig}
     */
    show: function () {
        this.view.fixPosition(this);
        this.element.main.show();
        this.onShow(this);
        this._viewed = true;
        return this;
    },


    /**
     * @method
     * @returns {ClassConfig}
     */
    hide: function () {
        if (this._viewed) {
            this.element.main.hide();
            this.onHide(this);
            this._viewed = false;
        }
        return this;
    },


    /**
     * @method
     * @param self
     */
    onShow: function (self) {
    },


    /**
     * @method
     * @param self
     */
    onHide: function (self) {
    },


    /**
     * @method
     * @param unixDate
     */
    onSelect: function (unixDate) {
        return this;
    },


    /**
     * @property timePicker
     * @type {object}
     */
    timePicker: {
        enabled: true
    },


    /**
     * @property dayPicker
     * @type {object}
     */
    dayPicker: {
        enabled: true
    },


    /**
     * @property monthPicker
     * @type {object}
     */
    monthPicker: {
        enabled: true
    },


    /**
     * @property yearPicker
     * @type {object}
     */
    yearPicker: {
        enabled: true
    }
}