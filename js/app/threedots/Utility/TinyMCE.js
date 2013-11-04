var ThreeDotsUtilityTinyMCE = {

    initTinyMCE: function(selector) {
        if (_.isUndefined(selector)) {
            selector = ".editor";
        }

        tinymce.init({selector: selector, menubar: false});
    }
}
