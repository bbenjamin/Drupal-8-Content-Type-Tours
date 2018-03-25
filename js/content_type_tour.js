(function ($, Drupal) {
  /*
  This will not be neccessary if/when https://www.drupal.org/project/drupal/issues/2911208 is completed.
  If a tooltip is assigned to a selector that is hidden inside a tab/fieldset, clicking "next" on to advance the tour
   will open the tab/fieldset before the tooltip is added.
   */
  Drupal.behaviors.contentTypeTour = {
    attach: function attach(context) {
      var $tour = $('#tour', context);
      if($tour.length) {
        $tour.joyride({
          'preStepCallback': function(a,b) {
            var id = $tour.find('li').eq(a).attr('data-id');
            if(id){
              var $attachTip = $('#' + id);
              // If the ID to be selected is not visible, see if it can be
              // made visible by clicking field group containers
              if(!$attachTip.is(":visible") ){
                // A hidden element can be hidden in a details tag or accordion item
                var $detailcontainer = $attachTip.closest("details");
                var $accordioncontainer = $attachTip.closest(".field-group-accordion-item");
                if ($detailcontainer.length>0){
                  // If it is a details tag + tab
                  if($detailcontainer.hasClass('field-group-tab')) {
                    var tabId = $detailcontainer.attr('id');
                    $("a[href='#" + tabId + "']").click();
                  }else{
                    // if it is just a collapsed details element
                    $attachTip.closest("details").find('summary').click();
                  }
                }else if ($accordioncontainer.length>0) {
                  // get the attribute that will get us to the accordion item open button
                  // then click it to open the accordion
                  var accid = $accordioncontainer.attr('aria-labelledby');
                  $('#' + accid + ' a').click();
                }
              }
            }
          }
        });
      }
    }
  };
})(jQuery, Drupal);