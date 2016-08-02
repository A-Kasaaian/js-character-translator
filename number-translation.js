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

var selector= 'a, b, p, h6, h5, h4, h3, h2, h1, option, strong, span, div, dd, dt, td, th, button, header, footer, form, input, select, textarea';
jQuery(document).ready(function() {
    jQuery("*").replaceText(toTranslate, function(matched){
        return mapObj[matched];
    });

jQuery('textarea, input').keyup(function() {
    var value = jQuery(this).val().toString().replace(toTranslate, function(matched) {
        return mapObj[matched];
    });
    jQuery(this).val(value);
});

    jQuery('body').bind("DOMSubtreeModified",function(){
      jQuery(selector).replaceText(toTranslate, function(matched){
          return mapObj[matched];
      });
    });
});
