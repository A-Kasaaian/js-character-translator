﻿var mapObj = {
          '1':"۱",
          '2':"۲",
          '3':"۳",
          '4':"۴",
          '5':"۵",
          '6':"۶",
          '7':"۷",
          '8':"۸",
          '9':"۹",
          '0':'۰'
      };
    var mapObjRevers = {
        '۱':"1",
        '۲':"2",
        '۳':"3",
        '۴':"4",
        '۵':"5",
        '۶':"6",
        '۷':"7",
        '۸':"8",
        '۹':"9",
        '۰':'0'
    };

    $.fn.replaceText = function( search, replace, text_only ) {
        return this.each(function(){
            var node = this.firstChild,
                val,
                new_val,

            // Elements to be removed at the end.
                remove = [];

            // Only continue if firstChild exists.
            if ( node ) {

                // Loop over all childNodes.
                do {

                    // Only process text nodes.
                    if ( node.nodeType === 3 ) {

                        // The original node value.
                        val = node.nodeValue;

                        // The new value.
                        new_val = val.replace( search, replace );

                        // Only replace text if the new value is actually different!
                        if ( new_val !== val ) {

                            if ( !text_only && /</.test( new_val ) ) {
                                // The new value contains HTML, set it in a slower but far more
                                // robust way.
                                $(node).before( new_val );

                                // Don't remove the node yet, or the loop will lose its place.
                                remove.push( node );
                            } else {
                                // The new value contains no HTML, so it can be set in this
                                // very fast, simple way.
                                node.nodeValue = new_val;
                            }
                        }
                    }

                } while ( node == node.nextSibling );
            }
            // Time to remove those elements!
            if(remove.length){ $(remove).remove(); }
        });
    };

var selector= 'a, p, h6, h5, h4, h3, h2, h1, option, strong, span, div, dd, dt, td, button, header, footer, form, input, select, textarea';
jQuery(document).ready(function() {
    jQuery(selector).replaceText(/1|2|3|4|5|6|7|8|9|0/gi, function(matched){
        return mapObj[matched];
    });

jQuery('textarea, input').keyup(function() {
    var id = this.id;
    var value = jQuery('#' + id).val().toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function(matched) {
        return mapObj[matched];
    });
    jQuery(this).val(value);
});

    jQuery('body').bind("DOMSubtreeModified",function(){
      jQuery(selector).replaceText(/1|2|3|4|5|6|7|8|9|0/gi, function(matched){
          return mapObj[matched];
      });
    });
});