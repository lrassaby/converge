/**
 * Created by lerenzo on 1/21/17.
 */
(function () {
    const numShipImages = 10;
    window.shipView = function (ship, index) {

        let imgNumber = index % numShipImages;
        return `<li>
                    <a href="index.html"></i> Ship ${ship.id} <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
                    <ul class="treeview-menu" style="display: none;">
                        <div class="box box-solid">
                            <div class="box-header ship-img">
                                <img src="./img/ships_${imgNumber}.jpg" alt="User Avatar">
                            </div>
                            <div class="box-body">
                                <h4 class="widget-user-username">${ship.id}</h4>
                                <h5 class="widget-user-desc">The BEST Ship ever</h5>
                            </div>
                        </div>
                    </ul>
                    
                </li>`;
    };

    window.convoyView = function(convoy){
         var $convoyView = $(`<li id="convoy_${convoy.id}">
                    <a href="index.html"></i> Convoy ${convoy.id} <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
                    <ul class="treeview-menu" style="display: none;">
                        <div class="box box-solid">
                            Ships: <span class="convoyShipCount">${convoy.ships.length}</span>&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-success btn-xs special-add-btn" data-toggle="modal"
                                    data-target="#addShipToConvoyModal"><i class="fa fa-plus bg-green"></i></button>
                        </div>
                    </ul>
                    
                </li>`);

         $convoyView.find("button").click(function(ev){
             window.currentConvoyView = $convoyView;
             window.currentConvoy = convoy;
         });

        return $convoyView
    }
})();