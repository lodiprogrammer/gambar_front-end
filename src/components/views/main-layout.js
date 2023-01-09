import React from "react";

function MainLayout() {
    return (

        <div className="d-flex justify-content-between">

            <div class="border border-primary border-5">
                <h1 class="mt-4">Kiri Sidebar</h1>
                <p>The starting state of the menu wi</p>
                <p>

                    ID which will toggle the menu when clicked.
                </p>
            </div>

            <div class="border border-danger border-5">
                <h1 class="mt-4">Kanan Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>
                    Make sure to keep all page content within the
                    <code>#page-content-wrapper</code>
                    . The top navbar is optional, and just for demonstration. Just create an element with the
                    <code>#sidebarToggle</code>
                    ID which will toggle the menu when clicked.
                </p>
            </div>


        </div>





    )
}

export default MainLayout;