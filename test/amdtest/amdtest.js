/**
 * Created by huxiangtao on 2016/3/22.
 */


(function(root,factory) {
    root.factory = factory(root.$);
    console.log(root.factory)
}(this,
    function($) {
        var ObjectClass = function() {
            this.name = "elliot"
            this.age = 18
            this.add = function() {
                this.age+=1;
            }
        }

        $.fn.testFunc = function() {
            this.each(function() {
                console.log(this)
                console.log($(this))
                var el = $(this);
                if (el.data('daterangepicker'))
                    el.data('daterangepicker').remove();
                el.data('daterangepicker', new ObjectClass());
            });
            console.log(this.data("daterangepicker"))
            return this;
        }

        return ObjectClass;
    }
))
