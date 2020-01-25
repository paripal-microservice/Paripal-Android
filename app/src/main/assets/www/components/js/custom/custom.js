$(document)
    .ready(
        function () {
            /**
             */
            var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn'),
                allPrevBtn = $('.prevBtn');

            allWells.hide();

            var validation = function (curStep, curStepBtn, tarIdNum, curIdNum) {
                var isValid = true;
                if (tarIdNum && curIdNum && (tarIdNum <= curIdNum)) {
                    return isValid;
                };
                var curInputs = curStep.find("input,textarea,md-select,md-radio-group");
                for (var i = 0; i < curInputs.length; i++) {
                    if (curInputs[i].classList.contains("ng-invalid")) {
                        if (($(curInputs[i])[0].attributes['disabled'] && $(curInputs[i])[0].attributes['disabled'].value === "disabled")) {
                            return isValid;
                        };
                        isValid = false;
                        $(curInputs[i]).trigger("blur").trigger("blur");
                    };
                };
                return isValid;
            };

            navListItems.click(function (e) {
                e.preventDefault();
                var curStepBtn = $('.btn-primary').attr('href').slice(1); //step-1
                var curStep = $('#' + curStepBtn);
                var $target = $($(this).attr('href')),
                    $item = $(this);
                var targetIdNumber = $target.selector.substr(6);
                var curIdNumber = curStepBtn.substr(5);
                var isValid = validation(curStep, curStepBtn, targetIdNumber, curIdNumber);
                if (!$item.hasClass('disabled') && isValid) {
                    navListItems.removeClass('btn-primary').addClass(
                        'btn-default');
                    $item.addClass('btn-primary');
                    allWells.hide();
                    $target.show();
                    //$target.find('input:eq(0)').focus();
                };
            });

            allNextBtn
                .click(function () {
                    var curStep = $(this).closest(".setup-content");
                    var curStepBtn = curStep.attr("id");
                    var isValid = validation(curStep, curStepBtn);

                    var nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a");
                    if (isValid)
                        nextStepWizard.removeAttr('disabled').trigger('click');
                });

            allPrevBtn
                .click(function () {
                    var curStep = $(this).closest(".setup-content");
                    var curStepBtn = curStep.attr("id");
                    var prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

                    $(".form-group").removeClass("has-error");
                    prevStepWizard.removeAttr('disabled').trigger(
                        'click');
                });

            $('div.setup-panel div a.btn-primary').trigger('click');
        });
