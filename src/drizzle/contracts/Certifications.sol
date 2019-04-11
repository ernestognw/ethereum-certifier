pragma solidity ^0.5.2;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract Certifications is ERC721 {
  // Variables
  struct Certificate {
    string fullName;
    string imageUrl;
    string course;
  }
  address owner;
  Certificate[] public certificates;
  
  // Constructor
  constructor() public{
    owner = msg.sender;
  }
  
  // Methods
  
  // Create Certificate
  function createCertificate(string memory _name, string memory _imageUrl, string memory _course, address _to) public returns (bool){
    uint certificateId = certificates.length;
    certificates.push(Certificate(_name, _imageUrl, _course));
    
    _mint(_to, certificateId);
    
    return true;
  }
}