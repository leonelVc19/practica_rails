import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
listarComercios() {
    global
        .api("/perfil_rep/my-restaurants", "POST", {
            id: $("#representant-login").attr("data-id"),
        })
        .then((response) => {
            if (response.status == true) {
                const data = response.data;
                if (data.length == 0) {
                    $("#formulario-comercio-show").click();
                    $("#prueba-gratis").hide();
                    $("#adquiere-paquete").hide();
                } else {
                    setTimeout(() => {
                        $("#elements").show();
                    }, 150);

                    $("#listado-comercios").empty();

                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];

                        let img_logo, url, btn, address, block;

                        url = "https://da-pw.mx/APPRISA/" +
                            element.picture_logo;

                        if (element.picture_logo) {
                            img_logo =
                                '<img src="' +
                                url +
                                '" class="img-fluid logo-comercio" alt="">';
                        } else {
                            img_logo =
                                '<img src="../../images/sitio-web/tienda.png" class="img-fluid logo-comercio" alt="">';
                        }
                        //Ternario
                        img_log = (element.picture_logo) ?  `<img src=" ${url} +" class="img-fluid logo-comercio" alt="">` : '<img src="../../images/sitio-web/tienda.png" class="img-fluid logo-comercio" alt="">';
//Valida si la cobertura se encuentra en el rango indicado
                        if (element.cobertura) {
                            btn =
                                '<button class="btn btn-r btn-primary tienda-login" data-id="' +
                                element.id_restaurant +
                                '" target="#restaurant-login">Ingresar</button>';
                            address =
                                '<p class="card-text comercio-direccion">Dirección: ' +
                                element.address +
                                "</p>";
                            block = "";
                        } else {
                            btn =
                                '<p class="card-text comercio-direccion text-bold fs-6 text-danger"></p>';
                            address =
                                '<p class="card-text comercio-direccion text-bold fs-5 text-danger">El servicio estará disponible pronto, espéranos.</p>';
                            block = "bg-gray-s";
                        }

                        let item =
                            '<div class="col-md-6 col-lg-4  col-xxl-3">' +
                            '<div class="card box-shadow ' +
                            block +
                            ' card-comercio rounded-5">' +
                            '<div class="card-body fondo-rest  rounded-5 text-center">' +
                            '<div class="logo-comercio-back container">' +
                            img_logo +
                            "</div>" +
                            '<div class="card box-shadow rounded-5">' +
                            ' <div class="card-body text-center">' +
                            '<p class="card-title text-bold fs-4">' +
                            element.name_restaurant +
                            "</p>" +
                            address +
                            btn +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>";

                        $("#listado-comercios").append(item);
                    }

                    functions();
                }
            }
        });
