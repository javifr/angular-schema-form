angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/ionic/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("directives/decorators/ionic/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\">{{item.title}}</button></div>");
$templateCache.put("directives/decorators/ionic/array.html","<div sf-array=\"form\" class=\"schema-form-array {{form.htmlClass}}\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\"><h3 ng-show=\"form.title && form.notitle !== true\">{{ form.title }}</h3><ol class=\"list-group\" ng-model=\"modelArray\" ui-sortable=\"\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" ng-repeat=\"item in modelArray track by $index\"><button ng-hide=\"form.readonly\" ng-click=\"deleteFromArray($index)\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></li></ol><div class=\"clearfix\" style=\"padding: 15px;\"><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/checkbox.html","<div class=\"item item-checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"checkbox\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"></label> <span ng-bind-html=\"form.title\"></span><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/checkboxes.html","<div sf-array=\"form\" ng-model=\"$$value$$\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/default.html","<label class=\"item item-input {{form.htmlClass}}\" ng-show=\"showTitle()\"><span class=\"input-label\" ng-if=\"form.htmlClass == \'item-stacked-label\'\">{{form.title}}</span> <input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"{{form.fieldHtmlClass}}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></label>");
$templateCache.put("directives/decorators/ionic/fieldset-trcl.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><div ng-transclude=\"\"></div></fieldset>");
$templateCache.put("directives/decorators/ionic/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></fieldset>");
$templateCache.put("directives/decorators/ionic/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("directives/decorators/ionic/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><div><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"btn-group\"><label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-value=\"item.value\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-value=\"item.value\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/radios.html","<label class=\"item item-radio\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-value=\"item.value\" name=\"{{form.key.slice(-1)[0]}}\"><div class=\"item-content\" ng-bind-html=\"item.name\"></div><i class=\"radio-icon ion-checkmark\"></i><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></label>");
$templateCache.put("directives/decorators/ionic/readonly.html","<div class=\"form-group\"><label ng-show=\"showTitle()\">{{form.title}}</label> <input ng-if=\"form.type !== \'textarea\'\" type=\"text\" disabled=\"\" class=\"form-control\" value=\"{{$$value$$}}\"> <textarea ng-if=\"form.type === \'textarea\'\" disabled=\"\" class=\"form-control\">{{$$value$$}}</textarea><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></div>");
$templateCache.put("directives/decorators/ionic/section.html","<div class=\"schema-form-section {{form.htmlClass}}\" ng-if=\"!form.condition || evalExpr(form.condition,{ model: model, \'arrayIndex\': arrayIndex })\"><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></div>");
$templateCache.put("directives/decorators/ionic/select.html","<label class=\"item item-input item-select {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"input-label\" ng-show=\"showTitle()\">{{form.title}}</label><select ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name for item in form.titleMap\" name=\"{{form.key.slice(-1)[0]}}\"></select><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></label>");
$templateCache.put("directives/decorators/ionic/submit.html","<input type=\"submit\" class=\"button button-block button-positive {{ form.style || \'button-positive\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"button button-block button-positive {{ form.style || \'button-positive\' }}\" type=\"submit\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\">{{form.title}}</button>");
$templateCache.put("directives/decorators/ionic/tabarray.html","<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>");
$templateCache.put("directives/decorators/ionic/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane\" ng-disabled=\"form.readonly\" ng-repeat=\"tab in form.tabs\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><bootstrap-decorator ng-repeat=\"item in tab.items\" form=\"item\"></bootstrap-decorator></div></div></div>");
$templateCache.put("directives/decorators/ionic/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label ng-show=\"showTitle()\">{{form.title}}</label> <textarea class=\"form-control {{form.fieldHtmlClass}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea> <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span></div>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', function(decoratorsProvider) {
  var base = 'directives/decorators/ionic/';

  decoratorsProvider.createDecorator('ionicDecorator', {
    textarea: base + 'textarea.html',
    fieldset: base + 'fieldset.html',
    array: base + 'array.html',
    tabarray: base + 'tabarray.html',
    tabs: base + 'tabs.html',
    section: base + 'section.html',
    conditional: base + 'section.html',
    actions: base + 'actions.html',
    select: base + 'select.html',
    checkbox: base + 'checkbox.html',
    checkboxes: base + 'checkboxes.html',
    number: base + 'default.html',
    password: base + 'default.html',
    submit: base + 'submit.html',
    button: base + 'submit.html',
    radios: base + 'radios.html',
    'radios-inline': base + 'radios-inline.html',
    radiobuttons: base + 'radio-buttons.html',
    help: base + 'help.html',
    date: base + 'default.html',
    'default': base + 'default.html'
  }, [
    // function(form) {
    //   if (form.readonly && form.key && form.type !== 'fieldset') {
    //     return base + 'readonly.html';
    //   }
    // }
  ]);

  //manual use directives
  decoratorsProvider.createDirectives({
    textarea: base + 'textarea.html',
    select: base + 'select.html',
    checkbox: base + 'checkbox.html',
    checkboxes: base + 'checkboxes.html',
    number: base + 'default.html',
    submit: base + 'submit.html',
    button: base + 'submit.html',
    text: base + 'default.html',
    date: base + 'default.html',
    password: base + 'default.html',
    datepicker: base + 'datepicker.html',
    input: base + 'default.html',
    radios: base + 'radios.html',
    'radios-inline': base + 'radios-inline.html',
    radiobuttons: base + 'radio-buttons.html',
  });

}]).directive('sfFieldset', function() {
  return {
    transclude: true,
    scope: true,
    templateUrl: 'directives/decorators/ionic/fieldset-trcl.html',
    link: function(scope, element, attrs) {
      scope.title = scope.$eval(attrs.title);
    }
  };
});

// .directive('formatDate',function (){
//     return {
//         require: 'ngModel',
//         link: function(scope, elem, attr, modelCtrl) {
//             modelCtrl.$formatters.push(function(modelValue){
//                 return new Date(modelValue);
//             });
//         }
//     };
// });
