$downloads = @(
  @{ Name = "malaysia.jpg"; Url = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80" },
  @{ Name = "andaman.jpg"; Url = "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80" },
  @{ Name = "goa.jpg"; Url = "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80" },
  @{ Name = "kerala.jpg"; Url = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80" },
  @{ Name = "assistance-banner.jpg"; Url = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80" },
  @{ Name = "avatar1.jpg"; Url = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
  @{ Name = "avatar2.jpg"; Url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
  @{ Name = "avatar3.jpg"; Url = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" },
  @{ Name = "avatar4.jpg"; Url = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" }
)

foreach ($item in $downloads) {
  $target = "k:\Travels_Website\images\" + $item.Name
  Write-Host "Downloading $($item.Name)..."
  try {
    Invoke-WebRequest -Uri $item.Url -OutFile $target -UserAgent "Mozilla/5.0"
  } catch {
    Write-Warning "Error downloading $($item.Name): $_"
  }
}
Get-ChildItem "k:\Travels_Website\images\"
