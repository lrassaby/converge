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
                                <h3 class="widget-user-username">Nadia Carmichael</h3>
                                <h5 class="widget-user-desc">Lead Developer</h5>
                            </div>
                        </div>
                    </ul>
                    
                </li>`;
    };

    window.convoyView = function(convoy){
        return `<li>
                    <a href="index.html"></i> Convoy ${convoy.id} <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
                    <ul class="treeview-menu" style="display: none;">
                        <div class="box box-solid">
                            This is some stuff
                        </div>
                    </ul>
                    
                </li>`
    }
})();