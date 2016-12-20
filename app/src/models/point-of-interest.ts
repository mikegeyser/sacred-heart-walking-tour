declare var google;

export class PointOfInterest {
    elements: PointOfInterestElement[] = [];
    info: string;
    
    constructor(
        public id: string,
        public title: string,
        public description: string = "",
        public latitude: number,
        public longitude: number
    ) {
        this.info = `<button class="pin-btn" ion-button onclick="mapNavigate(${this.id})">
                     <strong>${this.id} - ${this.title}</strong>
                     <div>${this.description}</div>
                     </button>`;
    }
    
    createMarker(map: any) {
        var marker = new google.maps.Marker({
            position: { lat: this.latitude, lng: this.longitude },
            title: this.title,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: this.info
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }

    addElement(element: PointOfInterestElement){
        this.elements.push(element);
    }
}

export class PointOfInterestElement {
    text: string;
    furtherText: string;
    url: string;  
    type: PointOfInterestElementType = PointOfInterestElementType.Image;
    reference: string;     
}

export enum PointOfInterestElementType {
    Image = 1,
    Video = 2
}
