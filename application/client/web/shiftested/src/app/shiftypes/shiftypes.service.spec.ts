import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShiftypesService } from './shiftypes.service';


describe('shiftypesService', () => {
  let service: ShiftypesService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ ShiftypesService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
  // get all Values
  it('should retrieve all values getallshiftypes from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      name: 'name 1',
      description: 'description 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/shiftypes`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllshiftypesValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const shiftypes = { 
      name: 'name 1',
      description: 'description 1',
    };

    
    // Make the API call
    service.PostAllshiftypesValues(shiftypes).subscribe(response => {
      expect(response).toEqual(shiftypes)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(shiftypes);

    // Flush the mocked response
    req.flush(shiftypes);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const shiftypes = { 
      id: '12dsadsa',
      name: 'name 1',
      description: 'description 1',
    };
    
    // Make the API call
    service.Updateshiftypes(shiftypes).subscribe(response => {
      expect(response).toEqual(shiftypes);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(shiftypes);

    // Flush the mocked response
    req.flush(shiftypes);
  });
   
  // delete the shiftypes 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeleteshiftypesValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified shiftypes ID', () => {
    const shiftypesId = 123;
    const mockResponse = { 
      id: shiftypesId, 
      name: 'name 1',
      description: 'description 1',
    };

    // Make the request
    service.GetEntityById(shiftypesId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypesid/`+shiftypesId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationshiftypes
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificshiftypes(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificshiftypesHistory
  it('should send a GET request to the correct URL getSpecificshiftypesHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificshiftypesHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { shiftypes: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchshiftypes(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftypes/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
