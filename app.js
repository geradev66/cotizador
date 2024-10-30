// función global actualizar
function actualizar(i){
    let usuarios= JSON.parse(localStorage.getItem("Usuarios"));

    usuarios[i].nombre = document.getElementById("newnombre").value;

    usuarios[i].apellido = document.getElementById("newapellido").value;

    usuarios[i].tel = document.getElementById("newtel").value;

    usuarios[i].ciudad = document.getElementById("newciudad").value;

    usuarios[i].precio = document.getElementById("newprecio").value;
    
    usuarios[i].fecha = document.getElementById("newfecha").value;

    usuarios[i].fecha_2 = document.getElementById("newfecha2").value;

    usuarios[i].cotizacion_numero = document.getElementById("newcotizacion").value;

    localStorage.setItem("Usuarios", JSON.stringify(usuarios));
}


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('formulario').addEventListener('submit', crear)


    // funcion crear
    function crear(e){

    let nombre = document.querySelector('#nombre').value.trim();
    let apellido = document.querySelector('#apellido').value.trim();
    let tel = document.querySelector('#tel').value.trim();
    let ciudad = document.querySelector('#ciudad').value.trim();
    let precio = document.querySelector('#precio').value.trim();
    let id = document.querySelector('#id').value.trim();
    let fecha = document.querySelector('#fecha').value.trim();
    let fecha_2 = document.querySelector('#fecha-2').value.trim();
    let cotizacion_numero = document.querySelector('#cotizacion-numero').value.trim();

        // validacion
    if (!nombre) {
        alert('El campo "Nombre" no puede estar vacío.');
        return;
    }
    if (!apellido) {
        alert('El campo "Apellido" no puede estar vacío.');
        return;
    }
    if (!tel) {
        alert('El campo "Teléfono" no puede estar vacío.');
        return;
    }
    if (!ciudad) {
        alert('El campo "Ciudad" no puede estar vacío.');
        return;
    }
    if (!precio) {
        alert('El campo "Precio" no puede estar vacío.');
        return;
    }
    if (!id) {
        alert('El campo "ID" no puede estar vacío.');
        return;
    }
    if (!fecha) {
        alert('El campo "Fecha" no puede estar vacío.');
        return;
    }
    if (!fecha_2) {
        alert('El campo "Fecha 2" no puede estar vacío.');
        return;
    }
    if (!cotizacion_numero) {
        alert('El campo "Número de cotización" no puede estar vacío.');
        return;
    }

    let usuario = {
        nombre,
        apellido,
        tel,
        ciudad,
        precio,
        id,
        fecha,
        fecha_2,
        cotizacion_numero
    }

    if(localStorage.getItem('Usuarios') === null){
        let usuarios = []
        usuarios.push(usuario)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    }else{
        let usuarios = JSON.parse(localStorage.getItem('Usuarios'))
        usuarios.push(usuario)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }

        leer()
        document.getElementById('formulario').reset()
        console.log('usuario guardado correctamente')
        e.preventdefault()

    }

    // funcion leer
    function leer(){
        let usuarios = JSON.parse(localStorage.getItem("Usuarios"))
        document.getElementById('tbody').innerHTML=""
        for(let i = 0; i < usuarios.length; i++){
            let nombre = usuarios[i].nombre
            let apellido = usuarios[i].apellido
            let tel = usuarios[i].tel
            let ciudad = usuarios[i].ciudad
            let precio = usuarios[i].precio
            let id = usuarios[i].id 
            let fecha = usuarios[i].fecha
            let fecha_2 = usuarios[i].fecha_2 
            let cotizacion_numero = usuarios[i].cotizacion_numero

            document.getElementById('tbody').innerHTML += `
            

            <tr>
                <th scope="row">${id}</th>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${tel}</td>
                <td>${ciudad}</td>
                <td>${precio}</td>
                <td>${fecha}</td>
                <td>${fecha_2}</td>
                <td>${cotizacion_numero}</td>
                <td><button type="button" class="btn btn-success btn-editar" data-nombre="${nombre}" >Editar</td>
                <td><button type="button" class="btn btn-danger btn-eliminar" data-nombre = "${nombre}">Eliminar</td> 
              </tr>
            
            
            
            `
        }

        // Asignar eventos a los botones de editar
        const botonesEditar = document.querySelectorAll('.btn-editar');
        botonesEditar.forEach(boton => {
            boton.addEventListener('click', function() {
                const nombre = this.getAttribute('data-nombre');
                editar(nombre);
            });
        });



        const botonesEliminar = document.querySelectorAll('.btn-eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', function() {
                const nombre = this.getAttribute('data-nombre');
                eliminar(nombre);
            });
        });

    }

    leer()

    
    // funcion editar
    function editar(nombre){

        let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].nombre === nombre){
                document.getElementById("body").innerHTML = `
                
                <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
  
      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->
  
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>
  
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
          <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Cotizaciones
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper p-2">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <h2>Cotizaciones</h2>
            </div>
          </div>
          <!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
       <!-- Button trigger modal -->
  






       <form action="" id="formulario">
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="newnombre" placeholder="${usuarios[i].nombre}" aria-describedby="emailHelp" >
                  <div class="alerta" id="alertaCampo">
                  </div>
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="newapellido" placeholder="${usuarios[i].apellido}">
                  <div class="alerta" id="alertaCampo2">

                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                  <input type="text" class="form-control" id="newtel"  placeholder="placeholder="${usuarios[i].tel}"">
                  <div class="alerta" id="alertaCampo3">

                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Ciudad</label>
                  <input type="text" class="form-control" id="newciudad"  placeholder="placeholder="${usuarios[i].ciudad}">
                  <div class="alerta" id="alertaCampo4">

                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Precio</label>
                  <input type="text" class="form-control" id="newprecio" width="276" placeholder="${usuarios[i].precio}"/>
                  <div class="alerta" id="alertaCampo5">

                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">ID</label>
                  <input type="number" class="form-control" id="id">
                  <div class="alerta" id="alertaCampo6">

                  </div>

                </div>


                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Fecha</label>
                  <input type="date" class="form-control" id="newfecha" width="276"  placeholder="${usuarios[i].fecha}" />
                  <div class="alerta" id="alertaCampo7">

                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Fecha de expiración</label>
                  <input type="date" class="form-control" id="newfecha2" width="276"  placeholder="${usuarios[i].fecha_2}"/>
                  <div class="alerta" id="alertaCampo8">

                  </div>
                </div>


                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Número de cotización</label>
                  <input type="text" class="form-control" id="newcotizacion" width="276" placeholder= "${usuarios[i].cotizacion_numero}" />
                  <div class="alerta" id="alertaCampo9">

                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">IVA</label>
                  <input type="text" class="form-control" id="iva" width="276" />
                </div>
              </div>
          </div>


          <div class="col-md-12">
            <div class="form-group">
              <label>Descripción</label>
              <div class="textArea"><textarea class="form-control" name="" id="descripcion"></textarea></div>
              <div class="alerta" id="alertaCampo10">
                <!-- <span class="text-danger">Campo obligatorio</span> -->
              </div>
              <!-- <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Logotipo</label>
                <input class="form-control" type="file" id="archivo-logo">
              </div> -->
            </div>
        </div>
        </div>
        <button type="submit" class="btn btn-primary" id="btn-actualizar" onclick="actualizar('${i}')">Actualizar</button>
      </form>
  





    </div>
    <!-- /.content-wrapper -->
  
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <!-- /.control-sidebar -->
  
    <!-- Main Footer -->
    <footer class="main-footer mt-5">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        Anything you want
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
  </div>
                
                
                
                `
            }
        }

    }

// función eliminar

function eliminar(nombre){
    let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].nombre === nombre){
            usuarios.splice(i,1)
        }
    }
    localStorage.setItem("Usuarios",JSON.stringify(usuarios))
    leer();
}

})