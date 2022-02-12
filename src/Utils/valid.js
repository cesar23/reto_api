
module.exports.validpeople = (body) => {
 

    const id = body.id || null;
    const nombre = body.nombre || null;
    const alto = body.alto || null;
    const masa = body.masa || null;
    const color_pelo = body.color_pelo || null;
    const color_piel = body.color_piel || null;
    const color_ojo = body.color_ojo || null;
    const ano_nacimiento = body.ano_nacimiento || null;
    const genero = body.genero || null;
    const mundo_origen = body.mundo_origen || null;
    const peliculas = body.peliculas || null;
    const especies = body.especies || null;
    const vehiculos = body.vehiculos || null;
    const inicio_enbarcacion = body.inicio_enbarcacion || null;
    const link = body.link || null;
  
  
    let msg = '';
    if (id === null || id == undefined) {
      msg = `El campo [id] es requerido`;
    }
    if (nombre === null || nombre == undefined) {
      msg = `El campo [nombre] es requerido`;
    }
    if (alto === null || alto == undefined) {
      msg = `El campo [alto] es requerido`;
    }
    if (masa === null || masa == undefined) {
      msg = `El campo [masa] es requerido`;
    }
    if (color_pelo === null || color_pelo == undefined) {
      msg = `El campo [color_pelo] es requerido`;
    }
    if (color_piel === null || color_piel == undefined) {
      msg = `El campo [color_piel] es requerido`;
    }
    if (color_ojo === null || color_ojo == undefined) {
      msg = `El campo [color_ojo] es requerido`;
    }
    if (ano_nacimiento === null || ano_nacimiento == undefined) {
      msg = `El campo [ano_nacimiento] es requerido`;
    }
    if (genero === null || genero == undefined) {
      msg = `El campo [genero] es requerido`;
    }
    if (mundo_origen === null || mundo_origen == undefined) {
      msg = `El campo [mundo_origen] es requerido`;
    }
    if (peliculas === null || peliculas == undefined) {
      msg = `El campo [peliculas] es requerido`;
    }
    if (especies === null || especies == undefined) {
      msg = `El campo [especies] es requerido`;
    }
    if (vehiculos === null || vehiculos == undefined) {
      msg = `El campo [vehiculos] es requerido`;
    }
    if (inicio_enbarcacion === null || inicio_enbarcacion == undefined) {
      msg = `El campo [inicio_enbarcacion] es requerido`;
    }
  
    if (link === null || link == undefined) {
      msg = `El campo [link] es requerido`;
    }
  
   return msg;
  
  
  }