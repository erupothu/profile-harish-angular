
export default function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        // Configure the URL to the upload script in your back-end here!
        return new UploadAdapter( loader, editor.t );
    };
}

class UploadAdapter {
	loader: any;
	reader: any;
	t: any;
	constructor( loader, t ) {
		this.loader = loader;
		this.t = t;
	}

	upload() {
		return new Promise( ( resolve, reject ) => {
			const reader = this.reader = new FileReader();

			reader.onload = function() {
				resolve( { default: reader.result } );
			};

			reader.onerror = function( error ) {
				reject( error );
			};

			reader.onabort = function() {
				reject();
			};

			//console.log(this.loader.file);
			this.loader.file
            .then( file => new Promise( ( resolve, reject ) => {
				reader.readAsDataURL(file);
            } ) );

		} );
	}
	abort() {
		if ( this.reader ) {
			this.reader.abort();
		}
	}
}