import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShiftprodService } from './shiftprod.service';


describe('shiftprodService', () => {
  let service: ShiftprodService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ ShiftprodService, { provide: SharedService, useValue: sharedServiceMock } ]
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


  it('should retrieve all values getallshiftypes from the server', () => {
    const mockResponse = { data: [{
      _id:'we2',
      name: 'name 1',
      description: 'description 1',
      }] 
    };

    const expectedUrl = `${service.BaseURL}/shiftypes`;

    service.GetAllshiftypesValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // get all Values
  it('should retrieve all values getallshiftprod from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/shiftprod`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllshiftprodValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const shiftprod = { 
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    };

    
    // Make the API call
    service.PostAllshiftprodValues(shiftprod).subscribe(response => {
      expect(response).toEqual(shiftprod)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(shiftprod);

    // Flush the mocked response
    req.flush(shiftprod);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const shiftprod = { 
      id: '12dsadsa',
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    };
    
    // Make the API call
    service.Updateshiftprod(shiftprod).subscribe(response => {
      expect(response).toEqual(shiftprod);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(shiftprod);

    // Flush the mocked response
    req.flush(shiftprod);
  });
   
  // delete the shiftprod 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeleteshiftprodValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified shiftprod ID', () => {
    const shiftprodId = 123;
    const mockResponse = { 
      id: shiftprodId, 
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    };

    // Make the request
    service.GetEntityById(shiftprodId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprodid/`+shiftprodId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationshiftprod
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificshiftprod(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificshiftprodHistory
  it('should send a GET request to the correct URL getSpecificshiftprodHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificshiftprodHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { shiftprod: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchshiftprod(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/shiftprod/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
