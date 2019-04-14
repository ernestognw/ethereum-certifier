pragma solidity ^0.5.2;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract Certifications is ERC721 {
  // Variables
  struct Certificate {
    uint certificateId;
    string fullName;
    uint generation;
    string imageUrl;
    string course;
    address certificateOwner;
  }

  address owner;
  Certificate[] public certificates;
  
  // Constructor
  constructor() public{
    owner = msg.sender;
  }
  
  // Methods
  // Create Certificate
  function createCertificate(string memory _name, uint _generation, string memory _imageUrl, string memory _course, address _to) public returns (bool){
    uint certificateId = certificates.length;
    certificates.push(Certificate(certificateId, _name, _generation, _imageUrl, _course, _to));
    
    _mint(_to, certificateId);
    
    return true;
  }

  // Get certificates quantity
  function getCertificatesLength() view public returns(uint256){
    return certificates.length;
  }
}