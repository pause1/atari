import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class Network {

    constructor(private httpClient: HttpClient) { }

    getData(vars: string) {
        return new Promise(resolve => {
            const params = new HttpParams()
                .set('data', vars);
            this.httpClient.get('http://localhost/atari/server.php', { params })
                .subscribe((data: Response) => {
                    resolve(data)
                },
                    error => {
                        console.error("Cannot estabilish connection with server.")
                        document.body.innerHTML = "<div class='alert alert-danger' role='alert'>brak polaczenia z serwerem, uruchom xampp, sprawdz czy w htdocs posiadawsz plik atari/server.php</div>"
                        console.warn("Contact your webmaster with following error:")
                        console.error(error)
                    });
        })
    }
}
